---
title: Reference
---

You can configure the BuildZri program execution via two approches: editing the configuration file or
providing CLI arguments.

## Configuration file

The `buildzri.config.json` file holds all build configurations of the particular C++ project. This file
is mandatory to start compilation with the BuildZri tool.

### `std: string`

Defines the standard C++ version. i.e.,: `c++17`

### `version: string`

Project version. i.e.,: `1.0.0`. The `BZ_VERSION` global variable receives this value before the compilation
process. The version string won't be validated, so you use any preferred version number format.

### `output: string`

Binary file output of the C++ project. BuildZri automatically appends `.exe` to this value on Windows.

### `include: object`

Directories to be included into the compiler execution for searching for header files.

Example:

```json
"include": {
    "*": [
        ".",
        "lib",
        "lib/asio/include"
    ],
    "windows": [
        "lib/webview/windows"
    ]
}
```

### `source: object`

Source files to be included into the compiler execution. Supports wildcard definitions with the
Python [glob syntax](https://docs.python.org/3/library/glob.html#glob.glob).

Example:

```json
"source": {
    "*": [
        "api/*/*.cpp",
        "process.cpp",
        "ui.cpp"
    ],
    "windows": [
        "window_win.cpp"
    ],
    "darwin": [
        "window_mac.mm"
    ],
    "linux": [
        "window_linux.cpp",
        "lib/linux/*.cpp"
    ]
}
```

### `options: object`

Additional compiler flags for each compiler implementation. Check the following documentations to learn
more about compiler flags:

- GNU C/C++ compiler flags: [manual](https://man7.org/linux/man-pages/man1/gcc.1.html)
- Apple Clang LLVM compiler flags: [manual](https://clang.llvm.org/docs/UsersManual.html)
- Microsoft Visual C++ compiler flags: [manual](https://docs.microsoft.com/en-us/cpp/build/reference/compiler-options)

Example:

```json
"options": {
    "windows": [
        "/EHsc"
    ],
    "darwin": [
        "-framework Cocoa"
    ],
    "linux": [
        "-Os",
        "-pipe"
    ]
}
```

### `definitions: object`

C/C++ preprocessor macro defnitions.

Example:

```json
"definitions": {
    "*": [
        "PROGRAM_VERSION=\\\"${BZ_VERSION}\\\""
    ],
    "linux": [
        "WEBVIEW_GTK=1",
    ],
    "darwin": [
        "WEBVIEW_COCOA=1"
    ],
    "windows": [
        "_HAS_STD_BYTE=0"
    ]
}
```

## Command-line arguments

Command-line arguments help you to change the build tool execution behavior without changing the configuration
file.

### `--verbose`

Prints build tool progress into the console. This CLI argument is helpful for diagnosing errors in the pre-compilation
stages.

## Global variables

Global variables can be used to change the configuration values dynamically before the compilation process.
You can use global variables with `output`, `definitions`, and `options` configuration keys.
Global variables come with the following syntax.

```
${BZ_VARIABLE_NAME}
```

BuildZri supports the following global variables:

### `BZ_VERSION`

Project version from the configuration file.

### `BZ_OS`

Operating system shortname: `linux`, `mac`, or `win`

### `BZ_ARCHL`

The current machine's CPU architecture. This value is obtained with the `platform.machine().lower()`
Python code snippet.

### `BZ_ARCH`

Shortname of the `BZ_ARCHL` value. i.e.,: This variable will return `x64` instead of `amd64` or `x86_64`.

### `BZ_COMMIT`

The latest commit hash of the Git repository. This value is extracted by using the following Git command via
the Python script:

```bash
git log -n 1 main --pretty=format:"%H"
```

Example usage:

```json
"definitions": {
    "*": [
        "PROGRAM_COMMIT=\\\"${BZ_COMMIT}\\\""
    ],
```

## Cross-platform definitions

BuildZri is a cross-platform C/C++ build tool, so how to define configuration values for each operating system?
Cross-platform configuration objects typically accept the following properties:

- `*`: For all operating systems
- `linux`: For GNU/Linux platforms
- `darwin`: For macOS
- `windows`: For Windows

You can define configurations for each operating system by using the above properties.

For example, the following JSON snippet set platform-specific macros for each operating system and
set one generic macro for all operating systems:

```json
"definitions": {
    "*": [
        "PROGRAM_VERSION=\\\"${BZ_VERSION}\\\""
    ],
    "linux": [
        "WEBVIEW_GTK=1",
    ],
    "darwin": [
        "WEBVIEW_COCOA=1"
    ],
    "windows": [
        "_HAS_STD_BYTE=0"
    ]
}
```

This cross-platform definition syntax works with `source`, `include`, `definitions`, and `options` configuration
objects.

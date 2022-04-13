---
title: BuildZri Introduction
---

```
  ____        _ _     _ ______     _
 |  _ \      (_) |   | |___  /    (_)
 | |_) |_   _ _| | __| |  / / _ __ _
 |  _ <| | | | | |/ _` | / / | '__| |
 | |_) | |_| | | | (_| |/ /__| |  | |
 |____/ \__,_|_|_|\__,_/_____|_|  |_|

 BuildZri - A minimal build automation tool for C++
```

Most C++ build automation tools come with a bit complex syntax and make simple projects complex.
As a result, C++ programmers often try to write shell scripts for compilation, but then they have to maintain
multiple scripts for each platform.

BuildZri is a minimal cross-platform C++ build automation tool written in Python. It comes with a simple
JSON-based configuration file with the features you need. It provides a minimal and flexible abstraction over the
standard compiler command-line interface, so you can integrate BuildZri in seconds while having the freedom
to configure the compiler.

[Source code](https://github.com/codezri/buildzri)

## Features

- Minimal JSON-based configuration with global variables
- Supports, GNU C++, Clang, and MSVC compilers
- Written in Python, works on any popular operating system
- Built for both developers and CI/CD servers
- No installation required, it comes as a simple script

[Neutralinojs](https://neutralino.js.org) uses BuildZri to build binaries on Linux, macOS, and Windows.

## Sample configuration

See how simple to generate cross-platform binaries with BuildZri:

```json
{
    "std": "c++17",
    "name": "BuildZri Sample",
    "version": "1.0.1",
    "output": "./bin/bzsample-${BZ_OS}_${BZ_ARCH}",
    "include": {
        "*": [
            "."
        ]
    },
    "source": {
        "*": [
            "*.cpp",
            "add/*.cpp",
            "subtract/*.cpp"
        ],
        "linux": [
            "platform/linux.cpp"
        ]
    },
    "definitions": {
        "*": [
            "BZ_TESTV=1",
            "BZ_PROJ_VERSION=\\\"${BZ_VERSION}\\\""
        ]
    },
    "options": {
        "linux": [
            "-Os"
        ],
        "darwin": [
            "-Os"
        ],
        "windows": [
            "/EHsc",
            "/Os",
            "/link"
        ]
    }
}
```

The above sample configuration generates the following binaries:

- `./bin/bzsample-linux_x64` on x64 GNU/Linux machines
- `./bin/bzsample-mac_x64` on x64/arm64 macOS machines
- `./bin/bzsample-win_x64.exe` on x64 Windows machines

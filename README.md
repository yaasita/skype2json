# skype2json

This script exports slack logs as json.

# Install

    yarn install

# Usage

    # copy main.db or skype.db to "in" directory
    # legacy: C:\Users\username\AppData\Roaming\Skype\username\main.db
    # current: C:\Users\username\AppData\Local\Packages\Microsoft.SkypeApp_kzf8qxf38zg5c\LocalState\username\skype.db
    node legacy.js
    node skype2json.js

# skype2json

This script exports slack logs as json.

# Install

    yarn install

# Usage

## 2016 format

    # input => C:\Users\username\AppData\Roaming\Skype\username\main.db
    node legacy.js in/main.db

## 2017 format

    # input => C:\Users\username\AppData\Local\Packages\Microsoft.SkypeApp_kzf8qxf38zg5c\LocalState\username\skype.db
    node skype2json_v2017.js in/skype.db

## 2018 format

    # input => C:\Users\username\AppData\Local\Packages\Microsoft.SkypeApp_kzf8qxf38zg5c\LocalState\username\skype.db
    node skype2json_v2018.js

const config = {
    "make_targets": {
        "win32": [
            "squirrel"
        ],
        "darwin": [
            "zip"
        ],
        "linux": [
            "zip",
            "deb",
            "rpm"
        ]
    },
    "electronPackagerConfig": {
        "packageManager": "npm"
    },
    "electronWinstallerConfig": {
        "name": "electron_vue_typescript_starter"
    },
    "electronInstallerDebian": {},
    "electronInstallerRedhat": {},
    "github_repository": {
        "owner": "",
        "name": ""
    },
    "windowsStoreConfig": {
        "packageName": "",
        "name": "electron_vue_typescript_starter"
    }
}

module.exports = config

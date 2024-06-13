import { replaceBase } from "../../localization/manager.js";
import { loadJSON } from "../sub/loadFromFs.js";

let changelog = loadJSON('./src/modules/changelog/changelog.json')

export default function(string) {
    try {
        const currentChangelog = changelog.current;

        
    } 
}

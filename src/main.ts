import { Plugin } from "obsidian";
import { render } from "./render";

export default class MyPlugin extends Plugin {
	/**
	 * The plugin's API.
	 */
	api = {
		render: render,
	};
}

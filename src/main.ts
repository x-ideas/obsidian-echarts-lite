import { Plugin } from "obsidian";
import { render } from "./render";

/**
 * Echarts Lite Plugin
 * You can use this plugin in dataviewjs block to render echarts.
 */
export default class EchartsLitePlugin extends Plugin {
	/**
	 * The plugin's API.
	 */
	api = {
		render: render,
	};
}

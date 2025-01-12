import {
	type EChartsInitOpts,
	type EChartsOption,
	getInstanceByDom,
	init,
} from "echarts";

import { Notice } from "obsidian";

interface Options extends EChartsOption {
	initOpt?: EChartsInitOpts;
}

/**
 * render echart view
 * @param opt
 * @param el
 */
export function render(opt: Options, el: HTMLElement) {
	const chart = initEchart(el, opt.initOpt || {});

	try {
		chart.setOption(opt);
	} catch (e) {
		// obsidian show tip
		new Notice("Render [echart] failed");
		console.error(e);
	}
}

function initEchart(el: HTMLElement, opt: EChartsInitOpts) {
	const container = el.createDiv("echart-lite-container");
	let chart = getInstanceByDom(container);
	const { width = 800, height = 600 } = opt;

	if (!chart) {
		chart = init(
			container,
			Array.from(document.body.classList).includes("theme-dark")
				? "dark"
				: "light",
			{ ...opt, width, height },
		);
	}

	return chart;
}

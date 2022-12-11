import $ from "../core";

$.prototype.addAttribute = function (attrName, value) {
	for (let i = 0; i < this.length; i++) {
		this[i].setAttribute(attrName, value);
	}

	return this;
};

$.prototype.remAttribute = function (attrName) {
	for (let i = 0; i < this.length; i++) {
		this[i].removeAttribute(attrName);
	}

	return this;
};

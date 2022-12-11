import "./lib/lib";
import $ from "./lib/lib";

$("button").on("click", function () {
	$(this).toggleClass("active");
});

$("div").addAttribute("data-name", "phone");
$(".active").remAttribute("data-name");

console.log($("button").html('Hello'));

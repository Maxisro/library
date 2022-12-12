import "./lib/lib";
import $ from "./lib/lib";

$("button").on("click", function () {
	$("div").eq(2).toggleClass("active");
});

$("div").addAttribute("data-name", "phone");
$(".active").remAttribute("data-name");

$("div").click(function () {
	console.log($(this).index());
});

console.log($("div").eq(2).find(".some"));

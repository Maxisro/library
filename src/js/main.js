import "./lib/lib";
import $ from "./lib/lib";

$("#first").on("click", () => {
  $("div").eq(1).fadeToggle(800);
});
$("[data-count='second']").on("click", () => {
  $("div").eq(2).fadeToggle(800);
});

$("button")
  .eq(2)
  .on("click", () => {
    $(".w-500").fadeToggle(800);
  });

// $(".wrap").html(
// 	`<div class="dropdown">
//     <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton2">Dropdown button #2</button>
//     <div class="dropdown-menu" data-toggle-id="dropdownMenuButton2">
//       <a href="#" class="dropdown-item">Action</a>
//       <a href="#" class="dropdown-item">Action #2</a>
//       <a href="#" class="dropdown-item">Action #3</a>
//     </div>
//   </div>`
// );
// $(".dropdown-toggle").dropdown();

$("#trigger").click(() =>
  $("#trigger").createModal({
    text: {
      title: "Modal title",
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Perspiciatis similique, unde dolorem facilis pariatur earum dolore
		dignissimos placeat alias maiores non, natus consectetur voluptas
		incidunt voluptates ipsum vel repellendus voluptatem.`,
    },
    btns: {
      count: 3,
      settings: [
        ["CLose", ["btn-danger", "mr-10"], true],
        [
          "Save changes",
          ["btn-success", "mr-10"],
          false,
          () => {
            alert("Data save");
          },
        ],
        ["Another button", ["btn-dark"], false],
      ],
    },
  })
);

$().get("https://jsonplaceholder.typicode.com/todos/1").then(res => console.log(res));

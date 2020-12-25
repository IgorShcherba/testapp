import fill from "./fill";

$(window).load(() => {
  console.log(data);
  $("button.MuiFab-root:contains('Fill')").click(() => {
    fill(data);
  });
});

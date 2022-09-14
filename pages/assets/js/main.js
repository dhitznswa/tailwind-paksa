$(document).ready(function () {
  $("#hamenu").click(function (e) {
    $("#sidebar").toggleClass("hidden");
  });
  $("#closeSidebar").click(() => {
    $("#sidebar").addClass("hidden");
  });
});

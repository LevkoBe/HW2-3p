function addData() {
  // Get the input values
  var inputData1 = document.getElementById("name").value;
  var inputData2 = document.getElementById("question_question").value;
  var inputData3 = document.getElementById("password").value;
  var inputData4 = document.getElementById("drowssap").value;

  // Update the table data cells
  document.getElementById("data1").textContent = inputData1;
  document.getElementById("data2").textContent = inputData2;
  document.getElementById("data3").textContent = inputData3;
  document.getElementById("data4").textContent = inputData4;

  // Clear the input fields
  document.getElementById("name").value = "";
  document.getElementById("question_question").value = "";
  document.getElementById("password").value = "";
  document.getElementById("drowssap").value = "";
}

$(document).ready(function () {
	class Patient {
		constructor(name, hospital, estate, contact, status, condition) {
			this.name = name;
			this.hospital = hospital;
			this.estate = estate;
			this.contact = contact;
			this.status = status;
			this.condition = condition;
		}
	}
	var records = [];

	var trace = [];

	$("#patient-form").submit(function (e) {
		e.preventDefault();
		var nameEntered = $("#name").val();
		var hospitalEntered = $("#hospital").val();
		var estateEntered = $("#estate").val();
		var contactEntered = $("#contact").val();
		var statusEntered = $("#status").val();
		var conditionEntered = $("#condition").val();

		var newPatient = new Patient(
			nameEntered,
			hospitalEntered,
			estateEntered,
			contactEntered,
			statusEntered,
			conditionEntered
		);

		records.push(newPatient);
		if (records.length > 0) {
			$("#details-div").fadeIn();
		}

		$("#patient-summary").append(
			"<tr>" +
			"<td>" +
			records.length +
			"</td>" +
			"<td>" +
			newPatient.hospital +
			"</td>" +
			"<td>" +
			newPatient.name +
			"</td>" +
			"<td>" +
			newPatient.contact +
			"</td>" +
			"<td>" +
			newPatient.estate +
			"</td>" +
			"<td>" +
			newPatient.status +
			"</td>" +
			"<td>" +
			newPatient.condition +
			"</td>" +
			"<td>" +
			'<button class="btn btn-success" id="trace-' +
			records.length +
			'">Trace</button>' +
			"</td>" +
			"</tr>"
		);
		$("#name").val("");
		$("#hospital").val("");
		$("#estate").val("");
		$("#contact").val("");
		$("#status").val("");
		$("#condition").val("");

		for (let i = 1; i <= records.length; i++) {
			$("#trace-" + i).click(function () {
				var patient = records[i - 1];
				if (patient.status === "Negative") {
					alert("The patient tested negative. No need for Contact tracing");
				} else {
					$(".location").show();
				}
			});
		}
	});

	$("#trace-form").submit(function (e) {
		e.preventDefault();
		var nameEntered = $("#name1").val();
		var estateEntered = $("#estate1").val();
		var contactEntered = $("#contact1").val();
		alert(
			nameEntered +
			" will be contacted and traced for testing using the number  :  " +
			contactEntered +
			"."
		);
		$("#name1").val("");
		$("#estate1").val("");
		$("#contact1").val("");
		$(".location").hide();
	});
});
$(document).ready(function () {
	$(".pic1").click(function () {
		$(".pic1").hide(100);
		$(".p1").show(100);
	})
	$(".p1").click(function () {
		$(".p1").hide(100);
		$(".pic1").show(100);
	});
});
$(document).ready(function () {
	$(".pic2").click(function () {
		$(".pic2").hide(100);
		$(".p2").show(100);
	})
	$(".p2").click(function () {
		$(".p2").hide(100);

		$(".pic2").show(100);
	});
});
$(document).ready(function () {
	$(".pic3").click(function () {
		$(".pic3").hide(100);
		$(".p3").show(100);
	})
	$(".p3").click(function () {
		$(".p3").hide(100);
		$(".pic3").show(100);
	});
	$(document).ready(function () {
		$(".pic4").click(function () {
			$(".pic4").hide(100);
			$(".p4").show(100);
		})
		$(".p4").click(function () {
			$(".p4").hide(100);
			$(".pic4").show(100);

		});
	});


});
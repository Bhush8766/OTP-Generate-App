 let generatedOTP = "";

        function generateOTP() {
            generatedOTP = String(1000 + Math.floor(Math.random() * 9000));
            alert("Your OTP is: " + generatedOTP);

            // Clear input fields
            document.getElementById("d1").value = "";
            document.getElementById("d2").value = "";
            document.getElementById("d3").value = "";
            document.getElementById("d4").value = "";

            // Focus first input
            document.getElementById("d1").focus();

            // Clear result message
            document.getElementById("result").innerHTML = "";
        }

        function verifyOTP() {
            const userOTP =
                document.getElementById("d1").value +
                document.getElementById("d2").value +
                document.getElementById("d3").value +
                document.getElementById("d4").value;

            const result = document.getElementById("result");

            if (userOTP.length < 4) {
                result.innerHTML = "⚠️ Please enter complete OTP";
                result.style.color = "orange";
                return;
            }

            if (userOTP === generatedOTP) {
                result.innerHTML = "✅ OTP Verified Successfully!";
                result.style.color = "green";
            } else {
                result.innerHTML = "❌ Invalid OTP";
                result.style.color = "red";
            }
        }

        // Auto focus next input
        const inputs = document.querySelectorAll(".otp-box input");
        inputs.forEach((input, index) => {
            input.addEventListener("keyup", (e) => {
                if (e.target.value && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });
        });
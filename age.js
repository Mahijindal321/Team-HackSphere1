script.js
        function validateAge() {
            var dob = document.getElementById("dob").value;
            var birthDate = new Date(dob);
            var today = new Date();
            var age = today.getFullYear() - birthDate.getFullYear();
            var monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            if (age < 18) {
                alert("You must be at least 18 years old to register.");
                return false;
            }
            return true;
        }
        script.js
        let votes = { bjp: 0, inc: 0, aap: 0, sp: 0, bsp: 0, cpi: 0, ncp: 0 };
        function vote(party) {
            votes[party]++;
            document.getElementById(`${party}-votes`).innerText = votes[party];
            alert(`You voted for ${party.toUpperCase()}`);
        }
        
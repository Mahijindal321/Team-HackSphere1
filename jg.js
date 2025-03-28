script.js 
document.getElementById('faceAuth').addEventListener('click', async () => {
    let video = document.getElementById('video');
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            setTimeout(() => {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                let imageData = canvas.toDataURL('image/png');
                video.srcObject.getTracks().forEach(track => track.stop());
                document.getElementById('status').innerText = 'Face authenticated!';
            }, 3000);
        })
        .catch(err => console.error("Error accessing webcam: ", err));
});

document.getElementById('fingerprintAuth').addEventListener('click', async () => {
    if (window.PublicKeyCredential) {
        try {
            let credential = await navigator.credentials.create({
                publicKey: {
                    challenge: new Uint8Array([1,2,3,4,5,6,7,8,9,0]),
                    rp: { name: "Voting System" },
                    user: { id: new Uint8Array(16), name: "User", displayName: "Voter" },
                    pubKeyCredParams: [{ type: "public-key", alg: -7 }],
                    timeout: 60000,
                    authenticatorSelection: { authenticatorAttachment: "platform", requireResidentKey: false, userVerification: "required" }
                }
            });
            document.getElementById('status').innerText = 'Fingerprint authenticated!';
        } catch (error) {
            console.error("Fingerprint authentication failed: ", error);
        }
    } else {
        alert("WebAuthn not supported on this browser.");
    }
});


    


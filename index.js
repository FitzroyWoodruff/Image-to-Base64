let output = document.querySelector("#output");
let image = document.querySelector("#image");
let jpeg = "data:image/jpeg;base64,";

/* these headers determine what the image is saved as
let png = "data:image/png;base64,";
let webp = "data:image/webp;base64,";
*/

let encoder = (e) => {
	let file = e.files[0];
	let reader = new FileReader();

	reader.onloadend = () => {
		output.textContent = reader.result;
		let img = new Image();
		img.src = jpeg + reader.result.split(",")[1];
		image.appendChild(img);
	};
	reader.readAsDataURL(file);
};

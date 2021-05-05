function syncFetch(url){
    const async = false

    let xhr = new XMLHttpRequest()

    xhr.open('GET',url,async)
    xhr.send()

    let response = xhr.responseText
    if(response == "" || response == undefined || response == null){
        let resStatus
        if(response == ""){
            resStatus = "an empty string"
        } else {
            resStatus = response
        }
        console.warn(`There is an error in your syncFetch request.\nThe response is ${resStatus}. Please check your URL, which is ${url}.`)
    }
    return response
}

function isLowerCase(input){
    if(input == input.toLowerCase()){
        return true;
    } else {
        return false;
    }
}

function isUpperCase(input){
    if(input == input.toUpperCase()){
        return true;
    } else {
        return false;
    }
}

function readFile(input) {
    let file = input.files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);
  
    reader.onload = function() {
      let res = reader.result;
      fileContent = res;
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
  
}

function process(file){
    if(file == undefined){
        alert('Please drop a file before adding any break !');
    }

    const breaker = "<break/>";

    let body = file.split('<body>'); // Split the XML for an array with [0] = the head, and [1] = body inner content and the footer
    body = body[1].split('</body>'); // Split the body with [0] = the content we actually want & [1] = the footer
    body = body[0]; // Finally, our body's inner content

    let splitted = body.split(`.`);

    for(let i=0; i<splitted.length;i++){
        let current = splitted[i];
        let next = splitted[i+1];
        if(next == undefined){
            break;
        }
        let nextChar = next.charAt(0);

        if(nextChar == " "){
            splitted[i] += ".";
        } else {
            if(isLowerCase(nextChar)){
                splitted[i] += ".";
            } else if(isUpperCase(nextChar)){
                splitted[i] += `.${breaker}`;
            } else {
                splitted[i] += ".";
            }
        }

    }

    let output;

    for(let i=0;i<splitted.length;i++){
        if(splitted[i] != undefined && splitted[i] != null){
            output += splitted[i];
        }
    }

    output = remove_first_occurrence(output,'undefined');

    displayOutput(output);

}

function displayOutput(input){
    document.querySelector('#result').innerHTML = `
    <h3>Please place this in the body tag of your JATS document (replacing the existing content)</h3>
    <textarea readonly>${input}</textarea>
    `;
}

function remove_first_occurrence(str, searchstr){
	let index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}

function redirect(url){
    window.location.href = url;
}
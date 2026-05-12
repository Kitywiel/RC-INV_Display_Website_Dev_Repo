// load json file
fetch("./js/data/items.json")

    // convert file to javascript object
    .then(response => response.json())

    // now we can use the data
    .then(data => {

        const container = document.getElementById("SD-THT-scroll-box");

        const placeholder = "./images/RC-INV LOGO BLUE.png";
        
        // top bar item counter
        document.getElementById("SD-THT-Total-Item-Count").textContent =
            `total items: ${data.length}`;

        // loop through every object in json
        data.forEach(item => {

            // create new div
            const div = document.createElement("div");

            // add class
            div.className = "SD-THT-place";


            // html structure
            div.innerHTML = `

                <img 
                    id="SD-THT-Item-image"
                    src="${item.image || placeholder}"
                >

                <p id="SD-THT-Name-Item">
                    ${item.name || "-"}
                </p>

                <p id="SD-THT-Item-Count">
                    ${item.count ?? 0}
                </p>

                <p id="SD-THT-Catogory">
                    ${item.category || "-"}
                </p>

                <p id="SD-THT-Item-THT">
                    ${item.tht || "-"}
                </p>

                <p id="SD-THT-Item-Flag">
                    ${item.flag || "-"}
                </p>

                <div id="SD-THT-item-status"></div>
            `;


            // add item to page
            container.appendChild(div);

        });

    })

    // if json file fails
    .catch(error => {
        console.log("Error loading json:", error);
    });
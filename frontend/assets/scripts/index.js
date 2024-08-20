let fileInput = document.getElementById('file-input');
let files = [];

fileInput.addEventListener('change', () => {
    files = []; // Clear previous files

    // Clear the playlist before adding new files
    let playlistUl = document.querySelector('.playlist ul');
    playlistUl.innerHTML = ''; // Remove all existing <li> elements

    // Iterate over the new files
    for (let i = 0; i < fileInput.files.length; i++) {
        let file = fileInput.files[i];
        let fileType = file.type;
        console.log(fileType);

        // Only accept mp3 and wav files
        if (fileType === 'audio/mp3' || fileType === 'audio/wav' || fileType === 'audio/mpeg') {
            files.push({
                name: file.name,
                url: URL.createObjectURL(file),
                type: fileType // Store the type to set it later in the source element
            });

            // Create a new list item for each valid file
            let newLi = document.createElement('li');
            newLi.innerHTML = `<div></div><audio controls><source src="" type="${fileType}"></audio>`;
            playlistUl.appendChild(newLi);
        }
    }

    console.log(files);

    // Display the playlist if there are valid files
    if (files.length > 0) {
        document.getElementById('playlist-heading').style.display = 'block';
        document.getElementsByClassName('playlist')[0].style.display = 'block';
        playlistUl.style.display = 'block';

        let playlistItems = document.querySelectorAll('.playlist ul li');

        playlistItems.forEach((item, index) => {
            if (files[index]) {
                item.style.display = 'block';
                item.querySelector('div').textContent = files[index].name;
                item.querySelector('source').src = files[index].url;
            }
        });

        // Adjust the height of the container only if the playlist is taller than the body
        let playlistHeight = document.querySelector('.playlist').offsetHeight;
        let bodyHeight = document.body.offsetHeight;

        if (playlistHeight > bodyHeight) {
            document.querySelector('.container').style.height = `${playlistHeight + 400}px`; // Add some padding if needed
        }
    }
});

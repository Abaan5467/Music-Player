let fileInput = document.getElementById('file-input');
let files = [];

fileInput.addEventListener('change', () => {
    files = [];

    let playlistUl = document.querySelector('.playlist ul');
    playlistUl.innerHTML = ''; 

    for (let i = 0; i < fileInput.files.length; i++) {
        let file = fileInput.files[i];
        let fileType = file.type;

        if (fileType === 'audio/mp3' || fileType === 'audio/wav' || fileType === 'audio/mpeg' || fileType === 'audio/x-m4a') {
            files.push({
                name: file.name,
                url: URL.createObjectURL(file),
                type: fileType 
            });

            
            let newLi = document.createElement('li');
            newLi.innerHTML = `<div></div><audio controls><source src="" type="${fileType}"></audio>`;
            playlistUl.appendChild(newLi);
        }
    }

    console.log(files);

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

        let playlistHeight = document.querySelector('.playlist').offsetHeight;
        let bodyHeight = document.body.offsetHeight;

        if (playlistHeight > bodyHeight) {
            document.querySelector('.container').style.height = `${playlistHeight + 400}px`; 
        }
    }
});

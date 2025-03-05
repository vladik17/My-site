<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Музыкальный сайт</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        .container {
            text-align: center;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            margin: 10px;
            cursor: pointer;
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div id="error-message">
            <p>Ошибка: Пожалуйста, нажмите, чтобы продолжить.</p>
            <button id="unlock-button">Подарить</button>
        </div>
        <div id="song-player" class="hidden">
            <audio id="audio" controls>
                <source src="https://dl.dropbox.com/scl/fi/7g9arll79k8upccqd07uy/.mp3?rlkey=w4qznx8ze12ldywm8sy9605dh&st=brr9nkbj&dl=0" type="audio/mpeg">
                Ваш браузер не поддерживает аудио элемент.
            </audio>
            <button id="mute-button">Заглушить</button>
        </div>
    </div>

    <script>
        // Получаем элементы DOM
        const errorMessage = document.getElementById('error-message');
        const songPlayer = document.getElementById('song-player');
        const unlockButton = document.getElementById('unlock-button');
        const muteButton = document.getElementById('mute-button');
        const audio = document.getElementById('audio');

        // Обработчик для кнопки "Подарить"
        unlockButton.addEventListener('click', () => {
            errorMessage.classList.add('hidden'); // Скрываем сообщение об ошибке
            songPlayer.classList.remove('hidden'); // Показываем аудиоплеер
            audio.play(); // Воспроизводим песню
        });

        // Обработчик для кнопки "Заглушить"
        muteButton.addEventListener('click', () => {
            window.location.href = 'https://t.me/+BqohVQYuL3BmMmMy'; // Перенаправляем на Telegram
        });
    </script>
</body>
</html>

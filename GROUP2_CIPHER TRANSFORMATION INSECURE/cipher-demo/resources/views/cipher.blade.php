<!DOCTYPE html>
<html>
<head>
    <title>Cipher Demo</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f6f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .card {
            background: white;
            padding: 30px;
            border-radius: 12px;
            width: 420px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        input {
            width: 100%;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #ccc;
            margin-bottom: 15px;
        }

        .btn-group {
            display: flex;
            gap: 10px;
        }

        button {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
        }

        .btn-insecure {
            background: #ff4d4d;
            color: white;
        }

        .btn-secure {
            background: #28a745;
            color: white;
        }

        /* 🔴 INSECURE RESULT */
        .result-insecure {
            margin-top: 20px;
            padding: 15px;
            border-radius: 10px;
            background: #2b0000;
            color: #ff4d4d;
            border: 2px solid #ff4d4d;
            font-family: monospace;
        }

        .result-insecure .attack {
            margin-top: 10px;
            background: black;
            padding: 10px;
            border-radius: 5px;
            color: #00ff00;
        }

        /* 🟢 SECURE RESULT */
        .result-secure {
            margin-top: 20px;
            padding: 15px;
            border-radius: 10px;
            background: #e6ffe6;
            color: #155724;
            border: 2px solid #28a745;
        }

        .secure-badge {
            display: inline-block;
            padding: 5px 10px;
            background: #28a745;
            color: white;
            border-radius: 5px;
            font-size: 12px;
            margin-bottom: 10px;
        }

        .lock {
            font-size: 20px;
        }
    </style>
</head>
<body>

<div class="card">
    <h2>🔐 Cipher Demo</h2>

    <!-- FORM -->
    <form method="POST">
        @csrf
        <input type="text" name="message" placeholder="Enter message..." required>

        <div class="btn-group">
            <button type="submit" formaction="/encrypt-insecure" class="btn-insecure">
                ❌ Insecure
            </button>

            <button type="submit" formaction="/encrypt-secure" class="btn-secure">
                ✅ Secure
            </button>
        </div>
    </form>

    <!-- RESULTS -->
    @if(session('result'))

        <!-- 🔴 INSECURE DISPLAY -->
        @if(session('type') == 'insecure')
        <div class="result-insecure">
            <strong>⚠️ SYSTEM COMPROMISED</strong><br><br>

            <p>Input: {{ session('input') }}</p>
            <p>Encoded: {{ session('result') }}</p>

            <div class="attack">
                > Decoding attack...<br>
                > SUCCESS: {{ base64_decode(session('result')) }}
            </div>
        </div>
        @endif


        <!-- 🟢 SECURE DISPLAY -->
        @if(session('type') == 'secure')
        <div class="result-secure">
            <div class="secure-badge">SECURE ENCRYPTION</div>

            <p><span class="lock">🔒</span> Input Protected</p>
            <p><strong>Encrypted Data:</strong></p>
            <small>{{ session('result') }}</small>
        </div>

        <!-- DECRYPT BUTTON -->
        <form method="POST" action="/decrypt">
            @csrf
            <input type="hidden" name="encrypted" value="{{ session('result') }}">
            <button style="margin-top:10px; width:100%;">🔓 Decrypt Secure Data</button>
        </form>
        @endif

    @endif

    <!-- DECRYPT RESULT -->
    @if(session('decrypted'))
    <div class="result-secure">
        <strong>🔓 Decrypted:</strong>
        <p>{{ session('decrypted') }}</p>
    </div>
    @endif

</div>

</body>
</html>
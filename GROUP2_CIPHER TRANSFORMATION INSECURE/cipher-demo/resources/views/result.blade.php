@if(isset($encrypted) || session('result'))

@php
    $data = $encrypted ?? session('result');
@endphp

<!-- 🔐 ENCRYPTED OUTPUT -->
<div style="margin-top:20px; padding:15px; border-radius:10px; background:#f9f9f9;">
    <h3>🔐 Encrypted Data</h3>
    <p style="word-break: break-all; font-family: monospace;">
        {{ $data }}
    </p>
</div>

<!-- ⚔️ ATTACK SECTION -->
<div style="margin-top:15px; padding:15px; border-radius:10px; 
    {{ session('type') == 'secure' ? 'background:#e6ffe6; border:2px solid #28a745;' : 'background:#2b0000; border:2px solid #ff4d4d; color:#ff4d4d;' }}">
    
    <h3>
        {{ session('type') == 'secure' ? '🛡️ Attack Attempt' : '⚠️ Attack Simulation' }}
    </h3>

    <p>
        {{ session('type') == 'secure' 
            ? 'Strong encryption prevents attackers from decoding this.' 
            : 'Weak encoding allows attackers to easily decode this.' }}
    </p>

    <!-- 🔴 ALWAYS VISIBLE BUTTON -->
    <a href="/attack/{{ $data }}" 
       style="
        display:inline-block;
        margin-top:10px;
        padding:10px 15px;
        background: {{ session('type') == 'secure' ? '#999' : '#ff4d4d' }};
        color:white;
        text-decoration:none;
        border-radius:5px;
        font-weight:bold;
        {{ session('type') == 'secure' ? 'pointer-events:none; opacity:0.6;' : '' }}
       ">
        {{ session('type') == 'secure' ? '🔒 Hack Disabled' : 'Simulation Hack Attack' }}
    </a>

</div>

@endif
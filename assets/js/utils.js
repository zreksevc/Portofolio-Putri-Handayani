// --- assets/js/utils.js ---

/**
 * Utilitas Web3: Fungsi untuk Menghubungkan Wallet (MetaMask)
 */
async function connectWallet() {
    const statusElement = document.getElementById('walletStatus');
    const connectBtn = document.getElementById('connectWalletBtn');
    
    if (typeof window.ethereum === 'undefined') {
        statusElement.textContent = "⚠️ MetaMask is not installed! Please install it.";
        return;
    }

    try {
        statusElement.textContent = "Connecting...";
        
        // Meminta akun dari MetaMask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        
        // Memformat alamat (0x1234...ABCD)
        const shortAddress = `${account.substring(0, 6)}...${account.substring(account.length - 4)}`;
        
        statusElement.innerHTML = `✅ Connected: <span class="neon-text">${shortAddress}</span>`;
        connectBtn.textContent = "Wallet Connected";
        connectBtn.disabled = true;

    } catch (error) {
        console.error("User rejected connection or error occurred:", error);
        statusElement.textContent = "❌ Connection failed. Please try again.";
        connectBtn.disabled = false;
    }
}
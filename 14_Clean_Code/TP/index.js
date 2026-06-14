// 1. Fungsi khusus untuk urusan mengambil data dari API
function fetchOrderDetails(orderId, token) {
    return fetch(`https://example.com/api/order/${orderId}`, {
        headers: {
            'Authorization': token
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch order details');
        }
        return response.json();
    })
    .catch(error => {
        console.error('API Error:', error);
        throw error; // Teruskan error agar bisa dihandle di UI jika perlu
    });
}

// 2. Fungsi khusus untuk merender isi teks detail pesanan ke dalam DOM
function renderOrderContent(detailsDiv, order) {
    detailsDiv.innerHTML = '';

    const header = document.createElement('h3');
    header.textContent = `Order ID: ${order.id}`;
    detailsDiv.appendChild(header);

    const status = document.createElement('p');
    status.textContent = `Status: ${order.status}`;
    detailsDiv.appendChild(status);
}

// 3. Fungsi khusus untuk mengatur tombol konfirmasi (tampil/sembunyi & event)
function setupConfirmButton(confirmBtn, order, token) {
    if (order.status === 'Delivered') {
        confirmBtn.style.display = 'none';
        return;
    }

    confirmBtn.style.display = 'block'; // Pastikan tampil jika statusnya bukan Delivered
    
    // Gunakan { once: true } agar listener otomatis terhapus setelah diklik sekali (menghindari double submit)
    confirmBtn.addEventListener('click', () => {
        confirmOrder(order.id, token);
    }, { once: true });
}

// 4. Fungsi utama (Orchestrator) yang mengontrol alur tampilan modal
function showOrderModal(orderId, token) {
    const modal = document.getElementById('orderModal');
    const detailsDiv = modal.querySelector('#orderDetails');
    const closeBtn = modal.querySelector('.close');
    const confirmBtn = modal.querySelector('#confirmOrderBtn');

    // Ambil data dulu, baru urus UI
    fetchOrderDetails(orderId, token)
        .then(order => {
            renderOrderContent(detailsDiv, order);
            setupConfirmButton(confirmBtn, order, token);

            // Tampilkan modal
            modal.style.display = 'block';

            // Setup tombol close
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            }, { once: true });
        });
}
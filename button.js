document.addEventListener('DOMContentLoaded', () => {
	// helper: open a popup by id
	const openPopup = id => {
		const el = document.getElementById(id);
		if (el) el.classList.add('active');
	};

	// open popup when elements with .open-popup are clicked
	document.querySelectorAll('.open-popup').forEach(btn => {
		btn.addEventListener('click', () => openPopup(btn.dataset.popupTarget || 'ticketPopup'));
	});

	// close popup via close button
	document.querySelectorAll('.popup-close').forEach(btn => {
		btn.addEventListener('click', () => {
			const overlay = btn.closest('.popup-overlay');
			if (overlay) overlay.classList.remove('active');
		});
	});

	// clicking outside overlay closes it
	document.querySelectorAll('.popup-overlay').forEach(overlay => {
		overlay.addEventListener('click', e => {
			if (e.target === overlay) overlay.classList.remove('active');
		});
	});

	// placeholder action button inside popup: navigates to single_ticket.html
	document.querySelectorAll('.popup-action').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault();
			window.location.href = 'single_ticket.html';
		});
	});

	// Escape to close overlays
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') document.querySelectorAll('.popup-overlay.active').forEach(el => el.classList.remove('active'));
	});
});


(() => {
	const mobileMenu = document.querySelector("[data-menu-button]");
	const openMenuBtn = document.querySelector("[data-menu]");

	mobileMenu.addEventListener("click", () => {
		const expanded =
			mobileMenu.getAttribute("aria-expanded") === "true" || false;
		mobileMenu.classList.toggle("is-open");
		mobileMenu.setAttribute("aria-expanded", !expanded);

		openMenuBtn.classList.toggle("is-open");
	});
})();

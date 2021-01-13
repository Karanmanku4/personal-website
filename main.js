/**
 * Sets the active tab and displays the appropriate content when the user clicks on the tab
 *
 * @param tab nav li in the header that was clicked
 * Side effects: Resets the active status on all tabs/ tab contents, then assigns active to the proper tab/tab content
 *               pair
 */
function setTabAndContentActive(tab) {
    const tabContents = document.querySelectorAll('[data-tab-content]')
    const tabTargets = document.querySelectorAll('[data-tab-target]')
    // Reset the active status of all tabs and hide all tab-content by removing 'active'
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
    })
    tabTargets.forEach(tabTarget => {
        tabTarget.classList.remove('active')
    })
    // Display the tab content of the tab's target by setting it to 'active'
    document.querySelector(tab.dataset.tabTarget).classList.add('active')
    tab.classList.add('active')
}

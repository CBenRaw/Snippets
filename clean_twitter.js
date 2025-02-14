//
// On the Profile page, paste into console to remove tweets and reposts.
//
function deleteAndUnretweet() {
    // Click the "More" button
    let moreButton = document.querySelector('[data-testid="caret"]');
    if (moreButton) {
        moreButton.click();

        setTimeout(() => {
            // Find and click the "Delete" menu item
            let deleteButton = [...document.querySelectorAll('div[role="menuitem"]')]
                .find(el => el.innerText.includes("Delete"));

            if (deleteButton) {
                deleteButton.click();

                setTimeout(() => {
                    // Click the final "Delete" confirmation button
                    let confirmButton = document.querySelector('[data-testid="confirmationSheetConfirm"]');
                    if (confirmButton) confirmButton.click();
                }, 500);
            }

            else {
                setTimeout(() => {
                    // Click the "Unretweet" button if it exists
                    let unretweetButton = document.querySelector('[data-testid="unretweet"]');
                    if (unretweetButton) {
                        unretweetButton.click();

                        setTimeout(() => {
                            // Click the "Undo Repost" confirmation button
                            let unretweetConfirm = document.querySelector('[data-testid="unretweetConfirm"]');
                            if (unretweetConfirm) unretweetConfirm.click();
                        }, 500);
                    }
                }, 1000);
            }

            // Wait before looping to the next item
            setTimeout(deleteAndUnretweet, 2000);
        }, 500);
    } else {
        console.log("No more items to delete or unretweet.");
    }
}

// Start the loop
deleteAndUnretweet();

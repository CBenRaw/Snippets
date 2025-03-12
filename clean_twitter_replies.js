//
// On the Profile page, paste into console to remove tweets and reposts.
//
async function deleteReplies() {
    while (true) {
        let moreButtons = document.querySelectorAll('[data-testid="caret"]');

        if (moreButtons.length === 0) {
            console.log("No more items found. Scrolling down to load more...");
            window.scrollTo(0, document.body.scrollHeight);
            await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for new posts to load
            continue;
        }

        for (let i = 0; i < moreButtons.length; i++) {
            moreButtons[i].click();
            await new Promise(resolve => setTimeout(resolve, 500));

            // Find and click the "Delete" menu item
            let deleteButton = [...document.querySelectorAll('div[role="menuitem"]')]
                .find(el => el.innerText.includes("Delete"));

            if (deleteButton) {
                deleteButton.click();
                await new Promise(resolve => setTimeout(resolve, 500));

                // Click the final "Delete" confirmation button
                let confirmButton = document.querySelector('[data-testid="confirmationSheetConfirm"]');
                if (confirmButton) {
                    confirmButton.click();
                    console.log("Deleted a post!");
                }
            }

            await new Promise(resolve => setTimeout(resolve, 500));
        }

        console.log("Loop completed. Scrolling down for more posts...");
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait for new posts to load
    }
}

// Start the loop on Replies
deleteReplies();


<template>
    <article class="card ut-padding-2">
        <header class="card__header">
            <h4>Card Header</h4>
        </header>

        <div class="card__body ut-marginTop">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
        </div>

        <footer class="card__footer">
            <div class="card__footer__tags ut-marginTop ut">
                <h5>Card Tags</h5>

                <button class="button button--tag ut-marginTop">
                    Tag
                </button>
            </div>

            <div class="card__footer__link ut-textAlignRight">
                <router-link to="/styleguide">
                    Link
                </router-link>
            </div>
        </footer>
    </article>
</template>

<script src="./VCard.js" />

<template functional>
    <article class="card">
        <header class="card__header">
            <h3>Card Header</h3>
        </header>

        <div class="card__body">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
        </div>

        <footer class="card__footer">
            <router-link
                to="/styleguide"
                class="card__footer__link"
            >
                Link
            </router-link>
        </footer>
    </article>
</template>

<script src="./GCard" />

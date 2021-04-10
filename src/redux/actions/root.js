import paths from "../paths";

const html = `
<style>
    .root__wrapper {
        background-image: url("https://spin4spin.com/images/promo/2200/IMG_9668__1_.jpg");
        background-position: center center;
        background-size: cover;
        height: 800px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;
        text-align: center;
        margin-bottom: 50px;
    }
    .root__text {
        font-family: "PF Regal Display Pro", sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 4em;
        margin-bottom: 60px;
    }
    .root__links {
        max-width: 800px;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .root__links-item {
        font-size: 10px;
        padding: 10px 60px;
        border: 1px solid #fff;
        text-transform: uppercase;
    }
    @media screen and (max-width: 768px) {
        .root__wrapper {
            margin-bottom: 0;
            margin: 0 -10px;
        }
            .root__text {
            font-size: 3em;
        }
    }
</style>
<div class="root__wrapper">
    <div class="root__text">Купил. Продал. Повторил.</div>
    <div class="root__links">
        <a href="/" class="root__links-item">Купить</a>
        <a href="/" class="root__links-item">Продать</a>
    </div>
</div>`;

const actions = {
    setHtml: html => ({
        type: paths.root.setHtml,
        payload: html
    }),

    fetchHtml: () => dispatch => {
        // загрузка с сервера
        dispatch(actions.setHtml(html));
    },

    setIsLoading: flag => ({
        type: paths.root.setIsLoading,
        payload: flag
    }),
};

export default actions;
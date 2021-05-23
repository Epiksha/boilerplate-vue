<template>
    <footer class="footer">
        <div class="footer__bar">
            <span class="paragraph-3 mr-2">
                For further questions:
            </span>

            <button
                class="button button--secondary no-underline"
            >
                Contact Us
            </button>
        </div>

        <div class="footer__container">
            <div class="footer__top grid grid--6/12 mobile:grid--12/12">
                <nav>
                    <div
                        class="footer__links"
                        :class="{'footer__links--loggedIn': isLoggedIn}"
                    >
                        <ul class="footer__list">
                            <li class="font-600">
                                Site Links
                            </li>

                            <li>
                                <router-link to="/team">
                                    Team
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/about">
                                    About us
                                </router-link>
                            </li>

                            <li>
                                <router-link to="/styleguide">
                                    Styleguide
                                </router-link>
                            </li>
                            
                            <li v-if="isLoggedIn">
                                <router-link to="/profile">
                                    Profile
                                </router-link>
                            </li>
                            
                            <li v-else>
                                <router-link to="/login">
                                    Login
                                </router-link>
                            </li>
                        </ul>

                        <ul class="footer__list">
                            <li class="font-600">
                                Legal
                            </li>

                            <li>
                                <router-link
                                    to="/terms-and-conditions"
                                >
                                    Terms of use
                                </router-link>
                            </li>

                            <li>
                                <router-link
                                    to="/cookie-policy"
                                >
                                    Cookie Policy
                                </router-link>
                            </li>

                            <li>
                                <router-link
                                    to="/privacy-notice"
                                >
                                    Privacy Notice
                                </router-link>
                            </li>

                            <li>
                                <router-link
                                    to="/legal-notices"
                                >
                                    Legal Notices
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div class="footer__copyright">
                <p>Copyright &copy; 2021 &ndash; Boilerplate</p>
            </div>
        </div>
    </footer>
</template>

<script src="./Footer.js" />

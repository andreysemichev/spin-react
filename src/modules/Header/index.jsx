import React from "react";
import classnames from "classnames";
import { HeaderTop } from "components";
import { ShoppingBag, WishList, LanguageDrop, Search, PopUp, AuthDrop, Menu } from "containers";
import styles from "./styles.module.scss";
import logo from "assets/img/logo.svg";

const Header = props => {
    return(<header>
        <PopUp />
        <HeaderTop />
        <div className={classnames(styles.headerCenter, styles.container)}>
            <a href="/">
                <img className={styles.logo} src={logo} alt="Spin 4 Spin" />
            </a>
            <div className={styles.right}>
                <LanguageDrop />
                <AuthDrop />
                <WishList />
                <ShoppingBag />
                <a className={styles.rightLink} href="/">Продать</a>
                <Search />
            </div>
        </div>
        <div className={styles.container}>
            <Menu />
        </div>

        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam qui at harum ut animi. Rerum beatae ab dolorum iste eaque cumque architecto maiores. Iste error fugiat delectus sunt rerum repellat. Eaque explicabo aliquam harum, corrupti error tempora nisi nobis. Expedita nam aspernatur ex asperiores debitis magni illo natus sunt repellat, voluptatibus iusto esse, nobis, quam temporibus sint quia. Dicta, dolores dolore dolor voluptatem quod rerum sint alias? Aliquid vel voluptatem dolore. Iste amet mollitia sed esse magni ipsa perspiciatis voluptatibus aliquam est. Animi, non praesentium. Vel ut officia pariatur adipisci fugit amet, dolore natus aspernatur labore eum autem numquam, alias eligendi! Quisquam voluptate laboriosam nesciunt expedita numquam iusto repudiandae? Ipsam consequuntur ad est ipsum, eum nesciunt facere omnis quae enim aperiam rem magni libero harum, sint sed veritatis ipsa eligendi dolorem sunt repellendus natus aspernatur neque? Sint ullam asperiores eveniet earum suscipit ab unde quos assumenda magni corrupti, ipsum, dolorum, expedita itaque? Porro rem in dolore. Ea delectus vero ratione beatae eum voluptatem soluta! Voluptates ipsam nam placeat ut id! Nam id animi inventore laudantium quae consequuntur amet voluptatem ullam similique! Veniam saepe provident cum labore numquam commodi. Illo labore ipsa maxime fugit odit et. Vitae maxime alias perspiciatis, quae nam praesentium ipsam quos eos eaque sint facilis reprehenderit laboriosam culpa distinctio! Exercitationem, distinctio, nulla maxime aliquid consequuntur quo sunt odit doloribus officia quam nihil reprehenderit corrupti culpa? Ipsum iste dolore impedit ipsam modi eos in aspernatur quibusdam rerum laudantium placeat eum rem eaque voluptatibus obcaecati nihil, voluptas itaque. Aspernatur sit minima a cum? Maiores officia, dolorum nobis nam cum laboriosam itaque excepturi magnam vitae voluptates voluptatum quisquam ut ipsum provident dolore doloremque sequi, laborum illo recusandae. Odit praesentium nobis maiores atque, sequi, aspernatur consequatur tempora asperiores minima, mollitia nam magnam ipsa! Officiis optio neque harum dolorem tempore illum modi, quidem aperiam numquam inventore provident ipsum rerum tempora fuga ullam totam id dolore doloremque quas natus pariatur. A, saepe consequuntur expedita tempora quasi, itaque facilis maiores, animi dolorum porro nulla aut iste unde fugiat sapiente maxime. Repudiandae culpa, aspernatur itaque ducimus harum aliquid consequuntur qui fugit quasi sit dicta ex consequatur illum veritatis ullam sapiente nemo iusto adipisci mollitia minima hic molestiae esse expedita quos! Error voluptatem necessitatibus pariatur iusto. Voluptatibus temporibus inventore tenetur similique fuga dolor ratione modi? Dolorem deserunt et ipsum provident, ab quod atque maiores modi voluptas ex in repudiandae aperiam ullam expedita aut, quidem asperiores ipsam!
    </header>);
};

export default Header;
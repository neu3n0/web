// import React from "react";
import styles from './HowTo.module.scss'

export default function HowTo() {
    return (
        <div className={styles.howto_container}>
        <h1 className={styles.title}>
            How to ...
        </h1>
        <div className={styles.rows}>
            <div className={styles.block}>
                <div className={styles.head}>step 1</div>
                <div className={styles.desc}>
                    Пример текста для проверки блока.
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.head}>step 2</div>
                <div className={styles.desc}>
                    Этот текст используется для проверки отображения текста в заданном блоке. Он помогает оценить шрифт, размер и отступы.
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.head}>step 3</div>
                <div className={styles.desc}>
                    Данный текст служит примером для проверки, как длинные абзацы текста выглядят в вашем блоке. Это полезно для тестирования размеров шрифта, межстрочного интервала, выравнивания и других параметров, связанных с текстовым содержимым. Убедитесь, что текст корректно переносится и отображается на всех устройствах.
                </div>
            </div>
        </div>
    </div>
    )
}
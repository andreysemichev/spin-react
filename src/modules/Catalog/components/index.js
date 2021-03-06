import React from "react";
import { } from "components"
import styles from "./styles.module.scss";
import { CatalogDrop } from "components";
import { SortField, ProductMiniСardItems, Pagination } from "containers";

const Component = ({ 
    condition, size, designer,
    conditionIsHide, designerIsHide, sizeIsHide,
    handleSetConditionIsHide, handlesetSizeIsHide, handlesetDesignerIsHide,
    handleSetIsCheckLocalCondition, handleSetIsCheckLocalSize, handleSetIsCheckLocalDesigner,
    isUpdatedFilters, applyFilters, resetFilters, isEmptyFilter,
    title, counter
}) => {
    return (<main className={styles.container}>
        <div>
            {condition && condition.length !== 0 && <div className={styles.rightItem}>
                <CatalogDrop items={condition} name="Состояние" isHide={conditionIsHide} handleSetIsHide={handleSetConditionIsHide} handleSetIsCheck={handleSetIsCheckLocalCondition} />
            </div> }
            {size && size.length !== 0 && <div className={styles.rightItem}>
                <CatalogDrop items={size} name="Размер" isRows={true} isHide={sizeIsHide} handleSetIsHide={handlesetSizeIsHide} handleSetIsCheck={handleSetIsCheckLocalSize} />
            </div> }
            {designer && designer.length !== 0 && <div className={styles.rightItem}>
                <CatalogDrop items={designer} isDesigners={true} name="Дизайнеры" isHide={designerIsHide} handleSetIsHide={handlesetDesignerIsHide} handleSetIsCheck={handleSetIsCheckLocalDesigner} />
            </div> }
            {(!isEmptyFilter || isUpdatedFilters) && <div className={styles.button} onClick={resetFilters}>Сбросить</div>}
            {isUpdatedFilters && <div className={styles.button} onClick={applyFilters}>Применить</div>}
        </div>
        <div className={styles.content}>
            <div className={styles.title}>{title} <span className={styles.titleCounter}>({counter} товаров)</span></div>
            <SortField />
            <ProductMiniСardItems />
            <Pagination />
        </div>
    </main>);
}

export default Component;
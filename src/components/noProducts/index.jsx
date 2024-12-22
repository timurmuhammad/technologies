
import styles from './noProducts.module.scss'
import {Button} from '../button'
import { TotalContext } from '@/app/layout';
import { useContext } from 'react';



export const NoProducts = () => {
	const { searchString, setSearchString } = useContext(TotalContext)
	const { category, setCategory } = useContext(TotalContext)
	

	return <div className={styles.body}>
		<h1 className={styles.title}>There is no data for this request ☹️</h1>
		<div onClick={() => {
			console.log(true)
			setSearchString('')
			setCategory([])
		}}><Button></Button></div>
	</div>
}
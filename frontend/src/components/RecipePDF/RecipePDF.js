import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { ViewDaySharp } from '@material-ui/icons';

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	},
});

// Create Document Component
const RecipePDF = ({data}) => {

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					<Text>{data.title}</Text>
					<Text>{data.description}</Text>
				</View>
				<View style={styles.section}>
					<Text>Potion Size: {data.portionSIze} people</Text>
					<Text>Time in minutes: {data.time}</Text>
				</View>
				<View style={styles.section}>
					<Text>Ingrediets:</Text>
					{data.ingredients.map(ingredient => {<Text>{ingredient}</Text>})}
				</View>
				<View style={styles.section}>
				<Text>Steps:</Text>
					{data.steps.map(steps => {<Text>{steps}</Text>})}
				</View>
			</Page>
		</Document>
	)

};

export default RecipePDF;
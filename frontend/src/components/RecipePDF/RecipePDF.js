import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../Navbar/Logo.png';
// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		paddingVertical: 20
	},
	section: {
		flexDirection: 'column',
		paddingHorizontal: 30,
		paddingVertical: 10
	},

});

// Create Document Component
const RecipePDF = ({data}) => {
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={{alignItems:"center", justifyContent:"center"}}>
					<Image
						src={logo}
						style={{height: 50}}
					/>
				</View>
				<Text style={{textAlign: "center", fontWeight: "bold"}}>{data.title}</Text>
				<View style={styles.section}>
					<Text style={{textAlign: 'justify'}}>{data.description.replace(/(\r\n|\n|\r)/gm, "")}</Text>
				</View>
				<View style={styles.section}>
					<Text>Potion Size: {data.portionSize} people</Text>
				</View>
				<View style={styles.section}>
					<Text>Time in minutes: {data.time}</Text>
				</View>
				<View style={styles.section}>
					<Text style={{fontWeight: "bold"}}>Ingredients:</Text>
					<View style={styles.page}>
						{data.ingredients.map(ingredient => <Text>	- {ingredient.amount} {ingredient.title}</Text>)}
					</View>
				</View>
				<View style={styles.section}>
					<Text style={{fontWeight: "bold"}}>Steps:</Text>
					<View style={styles.page}>
					{data.steps.map((steps, index) => <Text>	{index + 1} - {steps}</Text>)}
					</View>
				</View>
			</Page>
		</Document>
	)

};

export default RecipePDF;
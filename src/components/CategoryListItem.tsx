import { StyleSheet, View, Image, useColorScheme } from 'react-native';
import { CategoryType } from '@/types';

type CategoryListItemProps = {
    category: CategoryType; // Expecting a single category object
}

export const defaultImage =
  'https://github.com/KhadzA/Images/blob/main/Cafe/DefaultImage.png?raw=true';

const CategoryListItem = ({ category }: CategoryListItemProps) => {
  const colorScheme = useColorScheme();
  const styles = getStyles(colorScheme);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: category.image || defaultImage }} // Use category.image here
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

// Function to get styles based on color scheme
const getStyles = (colorScheme: string | null | undefined) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center', 
      borderRadius: 20,
    },
    image: {
      width: 250,
      height: 80, 
      borderWidth: 2, 
      borderColor: 'white', 
      borderRadius: 10, 
    },
  });

export default CategoryListItem;

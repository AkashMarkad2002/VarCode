import React, { useState, useRef } from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity, StyleSheet, Styles } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
    {
        id: 0,
        title: 'Variables',
        defination: 'A JavaScript Variable is simply a name of storage location',
        topic1: 'Community Forum',
        topic1time: '5 min',
        topic2: 'Review Concept',
        topic2time: '7 min',
        topic3: 'Practical Skills',
        topic3time: '6 min',
      
    },
    {
        id: 1,
        title: 'Variables',
        defination: 'A JavaScript Variable is simply a name of storage location',
        topic1: 'Community Forum',
        topic1time: '9 min',
        topic2: 'Review Concept',
        topic2time: '7 min',
        topic3: 'Practical Skills',
        topic3time: '5 min',
        
    },
    {
        id: 2,
        title: 'Variables',
        defination: 'A JavaScript Variable is simply a name of storage location',
        topic1: 'Community Forum',
        topic1time: '8 min',
        topic2: 'Review Concept',
        topic2time: '4 min',
        topic3: 'Practical Skills',
        topic3time: '9 min',
       
    },
    {
        id: 3,
        title: 'Variables',
        defination: 'A JavaScript Variable is simply a name of storage location',
        topic1: 'Community Forum',
        topic1time: '8 min',
        topic2: 'Review Concept',
        topic2time: '4 min',
        topic3: 'Practical Skills',
        topic3time: '9 min',
       
    },
    {
        id: 4,
        title: 'Variables',
        defination: 'A JavaScript Variable is simply a name of storage location',
        topic1: 'Community Forum',
        topic1time: '8 min',
        topic2: 'Review Concept',
        topic2time: '4 min',
        topic3: 'Practical Skills',
        topic3time: '9 min',
       
    }
];

const renderItem = ({ item }) => {
    return (
        <View
            style={{
                
                backgroundColor:bgcolor(item.id), borderBottomLeftRadius: 20, borderBottomEndRadius: 20,borderRadius: 20,
            }}>

            <View style={{ padding: 20, marginVertical: 5 }}>
                <Text style={{ color: 'white', marginTop: -10 }}>JAVASCRIPT COURSE</Text>
                <Text style={{ fontSize: 35, fontWeight: '700', color: 'white' }}>
                    {item.title}
                </Text>
            </View>

            <View style={{ backgroundColor: '#fff', padding: 20, borderBottomLeftRadius: 20, borderBottomEndRadius: 20 }}>
                <Text style={{ color: 'grey',width:290,fontSize:13 }}>{item.defination}</Text>
                <View style={{ marginVertical: 10 }}>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: '800', marginHorizontal: 10,color:'black' }}>{item.topic1}</Text>
                            <Text style={{color:'grey'}}>{item.topic1time}</Text>
                        </View>

                        <TouchableOpacity style={{ marginHorizontal: 10 }}>
                            <FontAwesome name='angle-right' size={40} color={'#888'} />
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: '800', marginHorizontal: 10,color:'black' }}>{item.topic2}</Text>
                            <Text style={{color:'grey'}}>{item.topic2time}</Text>
                        </View>

                        <TouchableOpacity style={{ marginHorizontal: 10 }}>
                            <FontAwesome name='angle-right' size={40} color={'#888'} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: '800', marginHorizontal: 10,color:'black' }}>{item.topic3}</Text>
                            <Text style={{color:'grey'}}>{item.topic3time}</Text>
                        </View>

                        <TouchableOpacity style={{ marginHorizontal: 10 }}>
                            <FontAwesome name='angle-right' size={40} color={'#888'} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </View>
    );
};

const bgcolor = (index) =>{
    if(index%2!=0){
        return '#FFC839'
    }else{
        return '#14D39A'
    }
}

const CardCrousel = () => {
    const [index, setIndex] = useState(0)
    const isCarousel = useRef(null)
    return (
        <View style={{
            alignItems: 'center'
        }}>
            <Carousel
                ref={isCarousel}
                data={data}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={index => setIndex(index)}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    marginHorizontal: 8,
                    backgroundColor:bgcolor(index)
                }}
                tappableDots={true}
                inactiveDotStyle={{
                    backgroundColor: '#fff',
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    )
}
const styles = StyleSheet.create({

})
export default CardCrousel
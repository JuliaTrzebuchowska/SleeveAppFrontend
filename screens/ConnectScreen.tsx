import React, { useEffect, useState } from 'react';
import { Alert, Button, View } from 'react-native';
import { BleManager } from 'react-native-ble-plx';

const ConnectScreen = () => {
  const [manager] = useState(new BleManager());
  const [device, setDevice] = useState<any>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const startScan = () => {
      manager.startDeviceScan(null, null, (error, scannedDevice) => {
        if (error) {
          console.error(error);
          return;
        }
        if (scannedDevice.name === 'ESP32_Vibration') { 
          manager.stopDeviceScan();
          setDevice(scannedDevice);
        }
      });
    };

    startScan();

    return () => {
      manager.stopDeviceScan();
    };
  }, [manager]);

  const connectToDevice = async () => {
    if (device) {
      try {
        await device.connect();
        setConnected(true);
        Alert.alert('Udalo się połączyć'); 
      } catch (error) {
        console.error('Failed to connect:', error);
      }
    }
  };

  const sendVibrationCommand = async () => {
    if (device && connected) {
      try {
        await device.writeCharacteristicWithResponseForService(
          '00001800-0000-1000-8000-00805f9b34fb', 
          '00002a00-0000-1000-8000-00805f9b34fb', 
          '1' 
        );
      } catch (error) {
        console.error('Failed to send command:', error);
      }
    }
  };

  return (
    <View>
      {!connected ? (
        <Button title="Connect to Device" onPress={connectToDevice} />
      ) : (
        <Button title="Activate Vibration Motor" onPress={sendVibrationCommand} />
      )}
    </View>
  );
};

export default ConnectScreen;

import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [field, setField] = useState("");
  const [enrollmentDate, setEnrollmentDate] = useState("");
  const [phone, setPhone] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      birth_date: birthDate,
      gender: gender,
      class: studentClass,
      field: field,
      enrollment_date: enrollmentDate,
      phone: phone,
      birth_place: birthPlace,
      address: address,
      description: description,
    };

    try {
      const response = await fetch('https://ifiag.pidefood.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        setMessage("Erreur lors de l'inscription.");
        return;
      }

      const responseData = await response.json();
      console.log(responseData);
      setMessage('Inscription réussie !');
    } catch (error) {
      console.log(error);
      setMessage("Erreur lors de l'inscription.");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <Image source={require('../../assets/images/brand.webp')} style={styles.logo} />

      <Text style={styles.title}>Student Registration</Text>

      <TextInput
        placeholder="First Name"
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Last Name"
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Phone (optional)"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Birth Date (YYYY-MM-DD)"
        style={styles.input}
        value={birthDate}
        onChangeText={setBirthDate}
      />
      <TextInput
        placeholder="Gender (Male/Female)"
        style={styles.input}
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        placeholder="Birth Place (optional)"
        style={styles.input}
        value={birthPlace}
        onChangeText={setBirthPlace}
      />
      <TextInput
        placeholder="Address (optional)"
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Class"
        style={styles.input}
        value={studentClass}
        onChangeText={setStudentClass}
      />
      <TextInput
        placeholder="Field"
        style={styles.input}
        value={field}
        onChangeText={setField}
      />
      <TextInput
        placeholder="Enrollment Date (YYYY-MM-DD)"
        style={styles.input}
        value={enrollmentDate}
        onChangeText={setEnrollmentDate}
      />
      <TextInput
        placeholder="Description (optional)"
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={3}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
    color: "#ff8000",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
    borderWidth: 1.5,
    borderColor: "#ff8000",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  textArea: {
    height: 90,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#ff8000",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#ff8000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  logoPlaceholder: {
    height: 60,
    width: 160,
    backgroundColor: "#ff8000",
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  message: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#ff8000",
    textAlign: "center",
  },
});

import React, { useState } from "react";
import {
  
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const PRIMARY = "#FF5347";
const BG = "#FAFAFA";
const TEXT = "#222222";

type Screen =
  | "Splash"
  | "Onboarding"
  | "Home"
  | "CORA"
  | "Journey"
  | "Explore"
  | "Profile";

export default function Index() {
  const [screen, setScreen] = useState<Screen>("Splash");

  const AppFrame = ({ children }: { children: React.ReactNode }) => (
    <View style={styles.page}>
      <View style={styles.phone}>{children}</View>
    </View>
  );

  const BottomNav = () => (
    <View style={styles.nav}>
      <NavItem label="Home" icon="🏠" active={screen === "Home"} onPress={() => setScreen("Home")} />
      <NavItem label="Journey" icon="🎮" active={screen === "Journey"} onPress={() => setScreen("Journey")} />
      <NavItem label="CORA" icon="🤖" active={screen === "CORA"} onPress={() => setScreen("CORA")} />
      <NavItem label="Explore" icon="📍" active={screen === "Explore"} onPress={() => setScreen("Explore")} />
      <NavItem label="Profile" icon="👤" active={screen === "Profile"} onPress={() => setScreen("Profile")} />
    </View>
  );

  if (screen === "Splash") {
    return (
      <AppFrame>
        <View style={styles.screen}>
          <View style={styles.center}>
            <View style={styles.blob}>
              <Text style={styles.robot}>🌱</Text>
            </View>

            <Text style={styles.logo}>KOPA</Text>
            <Text style={styles.tagline}>
              Your Digital Companion{"\n"}for Cooperative Journey
            </Text>
          </View>

          <TouchableOpacity style={styles.mainButton} onPress={() => setScreen("Onboarding")}>
            <Text style={styles.buttonText}>Mulai</Text>
          </TouchableOpacity>
        </View>
      </AppFrame>
    );
  }

  if (screen === "Onboarding") {
    return (
      <AppFrame>
        <View style={styles.screen}>
          <Text style={styles.smallText}>1 / 3</Text>
          <Text style={styles.title}>Halo! 👋</Text>
          <Text style={styles.subtitle}>Apa tujuan finansialmu?</Text>

          {[
            ["🍎", "Menabung"],
            ["💻", "Beli Laptop"],
            ["🏪", "Modal Usaha"],
            ["📈", "Investasi"],
            ["🛟", "Dana Darurat"],
          ].map(([icon, label]) => (
            <TouchableOpacity key={label} style={styles.optionCard}>
              <Text style={styles.optionIcon}>{icon}</Text>
              <Text style={styles.optionText}>{label}</Text>
            </TouchableOpacity>
          ))}

          <View style={styles.dots}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <TouchableOpacity style={styles.mainButton} onPress={() => setScreen("Home")}>
            <Text style={styles.buttonText}>Lanjut</Text>
          </TouchableOpacity>
        </View>
      </AppFrame>
    );
  }

  if (screen === "Home") {
    return (
      <AppFrame>
        <View style={styles.screen}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollBottom}>
            <View style={styles.headerRow}>
              <View>
                <Text style={styles.title}>Halo Alicia 👋</Text>
                <Text style={styles.subtitle}>Siap belajar koperasi hari ini?</Text>
              </View>
              <Text style={styles.bell}>🔔</Text>
            </View>

            <View style={styles.levelCard}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>A</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Level 4</Text>
                <View style={styles.progressBg}>
                  <View style={styles.progressFill} />
                </View>
              </View>

              <Text style={styles.xp}>540 XP</Text>
            </View>

            <Text style={styles.sectionTitle}>Journey Hari Ini</Text>

            <View style={styles.grid}>
              <Feature title="Video Edukasi" desc="Tonton sekarang" icon="▶️" color="#EDE7FF" />
              <Feature title="LifeQuest" desc="Mulai simulasi" icon="🎮" color="#EAF7ED" />
              <Feature title="Tanya CORA" desc="Chat dengan AI" icon="💬" color="#EAF1FF" />
              <Feature title="Daily Mission" desc="3 / 5 selesai" icon="🔥" color="#FFF1DF" />
            </View>

            <TouchableOpacity style={styles.streakCard}>
              <Text style={styles.cardTitle}>🔥 Streak Kamu</Text>
              <Text style={styles.cardText}>3 hari berturut-turut! Pertahankan progress-mu.</Text>
            </TouchableOpacity>
          </ScrollView>

          <BottomNav />
        </View>
      </AppFrame>
    );
  }

  if (screen === "CORA") {
    return (
      <AppFrame>
        <View style={styles.screen}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollBottom}>
            <Text style={styles.title}>CORA 🤖</Text>
            <Text style={styles.subtitle}>Cooperative Recommendation Assistant</Text>

            <View style={styles.chatCard}>
              <Text style={styles.cardText}>
                Halo Alicia 👋 Aku CORA. Ada yang bisa kubantu tentang koperasi hari ini?
              </Text>
            </View>

            {[
              "Aku ingin beli laptop",
              "Apa itu SHU?",
              "Apa bedanya koperasi dan bank?",
              "Bagaimana cara jadi anggota?",
            ].map((q) => (
              <TouchableOpacity key={q} style={styles.promptCard}>
                <Text style={styles.cardText}>{q}</Text>
              </TouchableOpacity>
            ))}

            <TextInput style={styles.input} placeholder="Ketik pertanyaanmu..." placeholderTextColor="#999" />
          </ScrollView>

          <BottomNav />
        </View>
      </AppFrame>
    );
  }

  if (screen === "Journey") {
    return (
      <AppFrame>
        <View style={styles.screen}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollBottom}>
            <Text style={styles.title}>LifeQuest</Text>
            <Text style={styles.subtitle}>Episode 1: Laptop Rusak</Text>

            <View style={styles.heroCard}>
              <Text style={styles.heroIcon}>💻</Text>
              <Text style={styles.cardTitle}>Laptopmu rusak sebelum deadline.</Text>
              <Text style={styles.cardText}>
                Kamu punya uang Rp800.000. Pilih keputusan terbaik dan lihat konsekuensinya.
              </Text>
            </View>

            {[
              ["A", "Pinjaman online", "Bunga tinggi, cepat cair"],
              ["B", "Tabungan pribadi", "Lambat, tapi aman"],
              ["C", "Pinjam koperasi", "Bunga rendah, terpercaya"],
            ].map(([letter, title, desc]) => (
              <TouchableOpacity key={letter} style={styles.choiceCard}>
                <Text style={styles.choiceLetter}>{letter}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>{title}</Text>
                  <Text style={styles.cardText}>{desc}</Text>
                </View>
              </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.mainButton}>
              <Text style={styles.buttonText}>Lanjutkan</Text>
            </TouchableOpacity>
          </ScrollView>

          <BottomNav />
        </View>
      </AppFrame>
    );
  }

  if (screen === "Explore") {
    return (
      <AppFrame>
        <View style={styles.screen}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollBottom}>
            <Text style={styles.title}>Coop Explorer</Text>
            <Text style={styles.subtitle}>Temukan koperasi terdekat</Text>

            <View style={styles.searchBox}>
              <Text style={styles.cardText}>🔍 Cari koperasi...</Text>
              <Text>⚙️</Text>
            </View>

            <View style={styles.mapBox}>
              <Text style={styles.mapPin}>📍</Text>
              <Text style={styles.mapPin2}>📍</Text>
              <Text style={styles.mapPin3}>📍</Text>
              <Text style={styles.mapLabel}>Area Peta Koperasi</Text>
            </View>

            <View style={styles.placeCard}>
              <Text style={styles.cardTitle}>Koperasi Mahasiswa</Text>
              <Text style={styles.cardText}>⭐ 4.8 • 1,2 km • Simpan Pinjam</Text>
              <Text style={styles.greenText}>Buka • 08.00 - 17.00</Text>

              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.buttonText}>Lihat Detail</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <BottomNav />
        </View>
      </AppFrame>
    );
  }

  return (
    <AppFrame>
      <View style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollBottom}>
          <Text style={styles.title}>Profile</Text>

          <View style={styles.profileCard}>
            <Text style={styles.profileAvatar}>👩‍💻</Text>
            <Text style={styles.cardTitle}>Alicia Theresa</Text>
            <Text style={styles.cardText}>Anggota Aktif</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Targetmu</Text>
            <Text style={styles.cardText}>Laptop Gaming</Text>
            <View style={styles.progressBg}>
              <View style={styles.progressFill} />
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Achievement</Text>
            <Text style={styles.badges}>🌱 🔥 🤖 🏆</Text>
          </View>
        </ScrollView>

        <BottomNav />
      </View>
    </AppFrame>
  );
}

function NavItem({
  label,
  icon,
  active,
  onPress,
}: {
  label: string;
  icon: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Text style={styles.navIcon}>{icon}</Text>
      <Text style={[styles.navText, active && { color: PRIMARY }]}>{label}</Text>
    </TouchableOpacity>
  );
}

function Feature({
  title,
  desc,
  icon,
  color,
}: {
  title: string;
  desc: string;
  icon: string;
  color: string;
}) {
  return (
    <TouchableOpacity style={[styles.feature, { backgroundColor: color }]}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDesc}>{desc}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
  },
  phone: {
    width: 390,
    height: 844,
    backgroundColor: BG,
    borderRadius: 40,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 30,
    elevation: 10,
  },
  screen: {
    flex: 1,
    backgroundColor: BG,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 54,
    paddingBottom: 24,
  },
  scrollBottom: {
    paddingBottom: 105,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blob: {
    width: 135,
    height: 135,
    borderRadius: 68,
    backgroundColor: "#FFE8E5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },
  robot: {
    fontSize: 58,
  },
  logo: {
    fontSize: 54,
    fontWeight: "900",
    color: PRIMARY,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 23,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: TEXT,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    marginBottom: 20,
  },
  smallText: {
    color: "#888",
    marginBottom: 22,
  },
  mainButton: {
    backgroundColor: PRIMARY,
    height: 56,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },
  secondaryButton: {
    backgroundColor: PRIMARY,
    height: 48,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
    fontSize: 15,
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "white",
    padding: 18,
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#F1F1F1",
  },
  optionIcon: {
    fontSize: 20,
  },
  optionText: {
    fontWeight: "700",
    color: TEXT,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 7,
    marginTop: 14,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: "#DDD",
  },
  dotActive: {
    backgroundColor: PRIMARY,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  bell: {
    fontSize: 22,
  },
  levelCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "white",
    padding: 18,
    borderRadius: 24,
    marginTop: 8,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#FFE3DE",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 24,
    fontWeight: "900",
    color: PRIMARY,
  },
  xp: {
    fontSize: 18,
    fontWeight: "900",
    color: TEXT,
  },
  progressBg: {
    height: 9,
    backgroundColor: "#EEEEEE",
    borderRadius: 99,
    marginTop: 8,
  },
  progressFill: {
    width: "65%",
    height: 9,
    backgroundColor: PRIMARY,
    borderRadius: 99,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 14,
    color: TEXT,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  feature: {
    width: "48%",
    padding: 16,
    borderRadius: 22,
    marginBottom: 12,
    minHeight: 120,
  },
  featureIcon: {
    fontSize: 28,
    marginBottom: 16,
  },
  featureTitle: {
    fontWeight: "900",
    color: TEXT,
    marginBottom: 4,
  },
  featureDesc: {
    color: "#666",
    fontSize: 12,
  },
  card: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 22,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#F2F2F2",
  },
  streakCard: {
    backgroundColor: "#FFF0EB",
    padding: 20,
    borderRadius: 24,
    marginTop: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: TEXT,
    marginBottom: 5,
  },
  cardText: {
    color: "#555",
    fontSize: 14,
    lineHeight: 20,
  },
  chatCard: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 22,
    marginBottom: 20,
  },
  promptCard: {
    backgroundColor: "white",
    padding: 17,
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
  heroCard: {
    backgroundColor: "#FFEDE8",
    padding: 22,
    borderRadius: 26,
    marginBottom: 18,
  },
  heroIcon: {
    fontSize: 58,
    marginBottom: 16,
  },
  choiceCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 20,
    marginBottom: 12,
  },
  choiceLetter: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFE1DD",
    color: PRIMARY,
    textAlign: "center",
    lineHeight: 42,
    fontWeight: "900",
    fontSize: 17,
  },
  searchBox: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  mapBox: {
    height: 270,
    backgroundColor: "#EDEDED",
    borderRadius: 28,
    marginBottom: 18,
    position: "relative",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  mapPin: {
    position: "absolute",
    top: 54,
    left: 80,
    fontSize: 34,
  },
  mapPin2: {
    position: "absolute",
    top: 130,
    right: 72,
    fontSize: 34,
  },
  mapPin3: {
    position: "absolute",
    bottom: 70,
    left: 145,
    fontSize: 34,
  },
  mapLabel: {
    color: "#777",
    fontWeight: "800",
  },
  placeCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 24,
  },
  greenText: {
    color: "#43A047",
    marginTop: 6,
    fontWeight: "700",
  },
  profileCard: {
    backgroundColor: "white",
    padding: 22,
    borderRadius: 26,
    alignItems: "center",
    marginBottom: 16,
  },
  profileAvatar: {
    fontSize: 62,
    marginBottom: 8,
  },
  badges: {
    fontSize: 32,
    marginTop: 8,
  },
  nav: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 24,
    height: 70,
    borderRadius: 28,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 8,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navIcon: {
    fontSize: 20,
  },
  navText: {
    fontSize: 10,
    color: "#999",
    marginTop: 3,
    fontWeight: "700",
  },
});

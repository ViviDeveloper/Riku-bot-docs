# 🔧 Variable systém  

Variable systém umožňuje používat dynamické proměnné ve zprávách a přizpůsobit je konkrétním uživatelům, serverům nebo situacím.  

---

## 📜 **Seznam proměnných**  

### **1. Member Variables**  
Tyto proměnné jsou dostupné, pokud je zpráva spojena s členem:  
- `{member_name}` - Jméno člena (např. vivi_trans)  
- `{member_display_name}` - Zobrazené jméno člena (např. vivi)  
- `{member_mention}` - Mention člena (např. @vivi)  
- `{member_avatar}` - URL avataru člena  
- `{member_banner}` - URL banneru člena  
- `{member_created}` - Datum připojení na Discord (např. 7/6/2017)  
- `{member_id}` - ID člena (např. 1311692010067066911)  

---

### **2. Server Variables**  
Tyto proměnné lze použít u všech zpráv:  
- `{server_name}` - Název serveru (např. Riku Support )  
- `{server_icon}` - URL ikony serveru  
- `{server_banner}` - URL banneru serveru  
- `{server_members}` - Počet členů na serveru (např. 1504)  
- `{server_roles}` - Počet rolí na serveru (např. 50)  
- `{server_channels}` - Počet kanálů na serveru (např. 30)  
- `{server_boosts}` - Počet boostů serveru (např. 7)  
- `{server_boost_level}` - Úroveň boostování serveru (např. 3)  
- `{server_boost_tier}` - Úroveň boostování serveru (např. 3)  
- `{server_created}` - Datum vytvoření serveru (např. 01/01/2025)  

---

### **3. Booster Variables**  
Tyto proměnné lze použít ve zprávách spojených s boostováním:  
- `{booster_name}` - Jméno boostera (např. vivi)  
- `{booster_mention}` - Mention boostera (např. @vivi_trans)  
- `{booster_display_name}` - Zobrazené jméno boostera (např. vivi ; @ help)  
- `{booster_avatar}` - URL avataru boostera  
- `{booster_banner}` - URL banneru boostera  
- `{booster_created}` - Datum připojení boostera na Discord (např. 7/6/2017)  
- `{booster_id}` - ID boostera (např. 1311692010067066911 )  
- `{boost_count}` - Počet boostů od uživatele (např. 2)  

---

### **4. Ticket Variables**  
Používají se u **welcome message** nebo **ticket panelů**:  
- `{category_name}` - Název kategorie (např. Support)  
- `{category_label}` - Štítek kategorie (např. Support)  
- `{category_description}` - Popis kategorie (např. Používá se u Select Menu Panelů)  
- `{category_id}` - ID kategorie (např. support-random)  
- `{category_count}` - Počet kategorií na serveru (např. 2)  

---

### **5. Ticket Name Format Variables**  
Používají se při přizpůsobení názvu ticketů:  
- `{member_name}` - Jméno člena (např. vivi_trans)  
- `{member_display_name}` - Zobrazené jméno člena (např.vivi ; @ help)  
- `{random}` - Náhodná čtyřčíslí (např. 1231)  
- `{random_emoji}` - Náhodný emoji (např. 💗)  
- `{ticket_count}` - Počet ticketů v kategorii (např. 10)  

---

### **7. Invite Tracker Variables**  
Používají se k informacím o zvaní členů:  
- `{inviter_name}` - Jméno uživatele, který pozval člena (např. vivi_trans)  
- `{inviter_display_name}` - Zobrazené jméno uživatele (např. vivi ; @ help)  
- `{inviter_mention}` - Mention uživatele (např. @vivi_trans)  
- `{inviter_avatar}` - URL avataru uživatele  
- `{inviter_banner}` - URL banneru uživatele  
- `{inviter_created}` - Datum připojení uživatele na Discord (např. 7/6/2017)  
- `{inviter_id}` - ID uživatele (např. 1311692010067066911)  
- `{inviter_invites}` - Počet pozvánek od uživatele (např. 12)  
- `{inviter_totalInvites}` - Celkový počet pozvánek od uživatele (např. 12)  
- `{inviter_bonusInvites}` - Počet bonus pozvánek od uživatele (např. 0)  
- `{inviter_fakeInvites}` - Počet falešných pozvánek od uživatele (např. 1)  
- `{inviter_leftInvites}` - Počet pozvánek uživatelů, kteří opustili server (např. 3)  
- `{invite_code}` - Kód pozvánky (např. /rikusupport)  
- `{invite_uses}` - Počet použití pozvánky (např. 0)  

---

Použij tento seznam pro přizpůsobení jakéhokoliv systému ve svém botovi! 🍪

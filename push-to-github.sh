#!/bin/bash
# ============================================
# Portfolio Web - 一键推送到 GitHub
# ============================================
# 使用方法:
#   1. 打开 Terminal
#   2. cd 到项目文件夹
#   3. 运行: bash push-to-github.sh
# ============================================

echo "🚀 开始推送代码到 GitHub..."

# 设置个人 GitHub 账号（仅限此项目）
echo ""
echo "📝 请输入你的 GitHub 用户名 (wenxindesign):"
read -p "> " GH_USER
GH_USER=${GH_USER:-wenxindesign}

echo "📝 请输入你的 GitHub 邮箱:"
read -p "> " GH_EMAIL

if [ -z "$GH_EMAIL" ]; then
  echo "❌ 邮箱不能为空，请重新运行脚本"
  exit 1
fi

# 初始化 Git（仅限此项目的配置）
git init
git config user.name "$GH_USER"
git config user.email "$GH_EMAIL"

# 添加所有文件并提交
git add -A
git commit -m "Initial commit: Next.js portfolio site

- Next.js 14 + Tailwind CSS + TypeScript
- Pages: Home, About, Sanctify, Opus Clip, DrayEasy, Play
- Components: Navbar, Footer, CaseStudyCard, CaseStudyLayout
- Fonts: Playfair Display + DM Sans
- Ready for image assets (see IMAGE_GUIDE.md)"

# 添加远程仓库并推送
git remote add origin https://github.com/wenxindesign/portfolio-web.git 2>/dev/null
git branch -M main
git push -u origin main

echo ""
echo "✅ 完成！代码已推送到 https://github.com/wenxindesign/portfolio-web"
echo ""
echo "如果推送时要求登录，请使用 Personal Access Token 作为密码"
echo "生成方法: GitHub → Settings → Developer settings → Personal access tokens → Generate new token"
